import { User } from './user'
import { Category } from './category'
import { Tag } from './tag'

type Article = {
  id: number
  userId: number
  thumbnailUrl: string
  title: string
  content: string
  status: number
  createdAt: Date
  updatedAt: Date
  categoryId: number
  user: User
  category: Category
  tags: Tag[]
}

export default Article;