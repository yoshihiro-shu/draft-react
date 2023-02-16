import { Link } from "react-router-dom";

import CurrentPager from "./CurrentPager";
import NormalPager from "./NormalPager";

import Pager from "../../types/pager";

type Props = {pager: Pager}

const displayPagerRange: number = 3

function Pagination({ pager }: Props){
  const startPage: number = pager.currentPage - 1 || 1
  const prevPage: number = pager.currentPage - 1
  const nextPage: number = startPage + displayPagerRange + 1
  const isPrevPage: boolean = 1 < pager.currentPage
  const isNextPage: boolean = nextPage < pager.lastPage

  const pagerRange: number[] = Array.from({length: displayPagerRange}, (_, n) => startPage+n)

  return (
    <div className="flex items-center py-8">
      {isPrevPage && <Link to={prevPage.toString()} className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Prev <i className="fas fa-arrow-right ml-2" /></Link>}
      {pagerRange.map(pr => (pr === pager.currentPage)
        ? <CurrentPager key={pr} page={pr}/>
        : <NormalPager key={pr} page={pr} />)
      }
      {isNextPage && <Link to={nextPage.toString()} className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">Next <i className="fas fa-arrow-right ml-2" /></Link>}
    </div>
  )
}

export default Pagination;
