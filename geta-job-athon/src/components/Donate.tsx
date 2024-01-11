const iframeUrl = 'https://ko-fi.com/getajobathon/?hidefeed=true&widget=true&embed=true&preview=true'

function Donate() {
  return (
    <div>
      <iframe
        id='kofiframe'
        src={iframeUrl}
        height='512'
        width='400'
        title='get a job a thon'>
      </iframe>
    </div>
  )
}

export default Donate
