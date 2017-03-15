import { Injectable } from '@angular/core';
import { Article } from '../models/articles';

const ARTICLES : Article[] = [
  {
    id: '0001',
    title: 'hello world',
    content: 'i become so num, i can be you that ，诶算了，反正也都是乱打的= =、憋在意，反正今天天气不错，我觉得也是hhhh哈哈哈哈哈哈啊啊啊啊啊'
  },
  {
    id: '0002',
    title: 'hello world~~~',
    content: 'i become so sb, i can be you aaa ，诶算了，反正也都是乱打的= =、憋在意，反正今天天气不错，我觉得也是hhhh哈哈哈哈哈哈啊啊啊啊啊'
  },
  {
    id: '0003',
    title: 'hello world!!!@@',
    content: 'i become so zhizhang, i can be you bbb ，诶算了，反正也都是乱打的= =、憋在意，反正今天天气不错，我觉得也是hhhh哈哈哈哈哈哈啊啊啊啊啊'
  }
]

@Injectable()
export class ArticleService {
  getArticles(): Article[] {
    return ARTICLES;
  }
  constructor() { }

}
