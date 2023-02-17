import { Link } from "react-router-dom";

import { useBasePath } from "../../server/utils/router";

const pagerCss: string = "h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"

type Props = {page: number}

const NormalPager: React.FC<Props> = ({ page }: Props) => {
  const basePath = useBasePath() as string
  const next: string = basePath + '/' + page.toString()
  return (
    <Link to={next} className={pagerCss}>
      { page }
    </Link>
  )
}

export default NormalPager;
