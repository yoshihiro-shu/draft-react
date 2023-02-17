import { Link,  } from "react-router-dom";

import { useBasePath } from "../../utils/router";

type Props = {page: number}

const PrevPager: React.FC<Props> = ({ page }: Props) => {
  const basePath = useBasePath() as string
  const next: string = basePath + '/' + page.toString()
  return (
    <Link to={next} className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
      Prev <i className="fas fa-arrow-right ml-2" />
    </Link>
  )
}

export default PrevPager;
