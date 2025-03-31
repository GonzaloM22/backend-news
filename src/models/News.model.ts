import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({ tableName: 'News' })
class News extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID })
  id: string;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  body: string;

  @Column({ type: DataType.STRING })
  image_url: string;

  @Column({ type: DataType.STRING })
  author: string;

  @Column({ type: DataType.STRING })
  date: string;
}

export default News;
