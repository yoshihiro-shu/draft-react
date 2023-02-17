import CurrentPager from "./CurrentPager";
import NormalPager from "./NormalPager";
import PrevPager from "./PrevPager";
import NextPager from "./NextPager";

import Pager from "../../server/types/pager";

type Props = {pager: Pager}

const displayPagerRange: number = 3

function Pagination({ pager }: Props){
  const startPage: number = pager.currentPage - 1 || 1
  const prevPage: number = pager.currentPage - 1
  const nextPage: number = startPage + displayPagerRange + 1
  const isPrevPage: boolean = 1 < pager.currentPage
  const isNextPage: boolean = nextPage < pager.lastPage

  let pagerRange: number[] = Array.from({length: displayPagerRange}, (_, n) => ( startPage+n ))

  return (
    <div className="flex items-center py-8">
      {isPrevPage && <PrevPager page={prevPage} />}
      {/* TODO fix */}
      {pagerRange.map(pr => (pr === pager.currentPage)
        ? <CurrentPager key={pr} page={pr}/>
        : <NormalPager key={pr} page={pr} />)
      }
      {isNextPage && <NextPager page={nextPage} />}
    </div>
  )
}

export default Pagination;
