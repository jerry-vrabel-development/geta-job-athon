const iframeUrl = 'https://ko-fi.com/getajobathon/?hidefeed=true&widget=true&embed=true&preview=true'

function Donate() {
  return (
    <div className="iframe-container">
      <iframe
        id='kofiframe'
        src={iframeUrl}
        title='get-a-job-a-thon'>
      </iframe>
    </div>
  )
}

export default Donate
