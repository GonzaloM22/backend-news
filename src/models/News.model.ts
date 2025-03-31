import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'News' })
class News extends Model {
  @Column({ type: DataType.STRING })
  declare title: string;

  @Column({ type: DataType.STRING })
  declare body: string;

  @Column({ type: DataType.STRING })
  declare image_url: string;

  @Column({ type: DataType.STRING })
  declare author: string;

  @Column({ type: DataType.STRING })
  declare date: string;
}

export default News;
