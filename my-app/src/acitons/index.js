export const showData = (id) => {
  switch (id){
    case '1' :
      return {
        type: 'SHOW_PAGING',
        data: '显示分页数据'
      }
    default:
      throw new Error('需要传入制定的id，类型为字符串');
  }
}

export const INITIAL = '初始画面'

