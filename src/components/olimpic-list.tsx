import { useEffect, useState } from "react";
import { /*Plus,*/ ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

import bgImg from "../assets/arco_olimpico.webp"

interface Country {
  id: string
  name: string
  continent: string
  flag_url: string
  gold_medals: number
  silver_medals: number
  bronze_medals: number
  total_medals: number
  rank: number
  rank_total_medals: number
}

interface Meta {
  per_page: number;
  total: number;
}

interface ApiResponse {
  data: Country[];
  meta: Meta;
}

export function OlimpicList() {
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'))
    }

    return 1
  })

  const [total, setTotal] = useState(0)
  const [olimpic, setOlimpic] = useState<Country[]>([])
  const qtdPerPage = 50

  const totalPages = Math.ceil(total / qtdPerPage)

  useEffect(() => {

    const url = new URL('https://apis.codante.io/olympic-games/countries')
    url.searchParams.set('per_page', String(qtdPerPage - 1))
    url.searchParams.set('page', String(page));

    fetch(url.toString())
      .then(response => response.json())
      .then((data: ApiResponse) => {
        setOlimpic(data.data)
        setTotal(data.meta.total)
      })
  }, [page])

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())

    url.searchParams.set('page', String(page))

    window.history.pushState({}, "", url)

    setPage(page)
  }

  function firstPage() {
    setCurrentPage(1)
  }

  function nextPage() {
    if (page < totalPages) {
      setCurrentPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setCurrentPage(page - 1);
    }
  }

  function lastPage() {
    setCurrentPage(totalPages)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Quadro de Medalhas</h1>
        <img width={64} src={bgImg} alt="Imagem dos arcos olímpicos" />
      </div>

      <Table>
        <thead>{/*border-zinc-600/15*/}
          <TableRow className="border-b ">
            <TableHeader className="text-sm">Ordem</TableHeader>
            <TableHeader className="text-sm">Países</TableHeader>
            <TableHeader title="Ouro" className="sm:text-lg text-center">🥇</TableHeader>
            <TableHeader title="Prata" className="sm:text-lg text-center">🥈</TableHeader>
            <TableHeader title="Bronze" className="sm:text-lg text-center">🥉</TableHeader>
            <TableHeader title="Total" className="sm:text-lg text-center">🥇🥈🥉</TableHeader>
            {/* <TableHeader style={{ width: 64 }}></TableHeader> */}
          </TableRow>
        </thead>
        <tbody>
          {olimpic.map((data) => {
            return (
              <TableRow key={data.id}>
                <TableCell>{data.rank}º</TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">{/*text-zinc-900*/}
                    <img width={32} height={22} src={data.flag_url} alt="Bandeira da China" className="rounded-md shadow-md" />
                    <span className="font-semibold text-ellipsis overflow-hidden ...">{data.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{data.gold_medals}</TableCell>
                <TableCell className="text-center">{data.silver_medals}</TableCell>
                <TableCell className="text-center">{data.bronze_medals}</TableCell>
                <TableCell className="text-center">{data.total_medals}</TableCell>
                {/* <TableCell>
                  <IconButton>
                    <Plus className="size-4 text-zinc-600" />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Exibindo {olimpic.length} de {total} CONs
            </TableCell>
            <TableCell className="text-right" colSpan={4}>
              <div className="inline-flex items-center gap-8">
                <span>Página {page} de {totalPages}</span>
                <div className="flex gap-1.5">
                  <IconButton onClick={firstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4 " />{/*text-zinc-600*/}
                  </IconButton>
                  <IconButton onClick={prevPage} disabled={page === 1}>
                    <ChevronLeft className="size-4 " />{/*text-zinc-600*/}
                  </IconButton>
                  <IconButton onClick={nextPage} disabled={page === 10}>
                    <ChevronRight className="size-4 " />{/*text-zinc-600*/}
                  </IconButton>
                  <IconButton onClick={lastPage} disabled={page === 10}>
                    <ChevronsRight className="size-4 " />{/*text-zinc-600*/}
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}