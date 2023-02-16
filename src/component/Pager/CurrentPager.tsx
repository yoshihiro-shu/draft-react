import { Link } from "react-router-dom";

import { useBasePath } from "../../utils/router";

const currentPagerCss: string = "h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"

type Props = {page: number}

const CurrentPager: React.FC<Props> = ({ page }: Props) => {
  const basePath = useBasePath() as string
  const next: string = basePath + '/' + page.toString()
  return (
    <Link to={next} className={currentPagerCss}>
      { page }
    </Link>
  )
}

export default CurrentPager;
