import { Breadcrumb } from 'antd'
import * as React from 'react'
import style from './todosList.module.scss'
import { CheckOutlined, EditFilled, DeleteFilled } from '@ant-design/icons'

export default function TodosList() {
  return (
    <div className={style.list__container}>
      <Breadcrumb className={style.brc__container}>
        <Breadcrumb.Item>All</Breadcrumb.Item>
        <Breadcrumb.Item>Todo</Breadcrumb.Item>
        <Breadcrumb.Item>Completed</Breadcrumb.Item>
      </Breadcrumb>
      <div className={style.todos__list}>
        <div className={style.list__item}>
          <div className={style.item__update}>
            <button>
              <CheckOutlined />
            </button>
          </div>
          <div className={style.item__name}>
            <p>Learning</p>
          </div>
          <div className={style.item__edit}>
            <button>
              <EditFilled />
            </button>
          </div>
          <div className={style.item__delete}>
            <button>
              <DeleteFilled />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
