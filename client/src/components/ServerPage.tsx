const fetchJsonData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    return response.json()
  })
}

export const ServerPage = async (props: any) => {
  const value = props.name == 'サンプル' ? '正解' : '不正解'
  const data = await fetchJsonData()
  console.log(data)
  return (
    <div>
      <p>サーバーサイド</p>
      <p>{value}</p>
      {/* <button onClick={() => props.click('server-miso2')}>ボタン</button> */}
    </div>
  )
}
