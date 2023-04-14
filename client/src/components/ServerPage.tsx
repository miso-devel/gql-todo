export const ServerPage = (props: any) => {
  const value = props.name == 'サンプル' ? '正解' : '不正解'
  function sleep(ms: any) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      console.log('aaa')
      sleep(5000)
      return response.json()
    })
    .then((json) => console.log(json))

  return (
    <div>
      <p>サーバーサイド</p>
      <p>{value}</p>
      <button onClick={() => props.click('server-miso2')}>ボタン</button>
    </div>
  )
}
