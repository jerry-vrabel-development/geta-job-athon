const iframeUrl = "https://player.twitch.tv/?channel=10jv01&parent=geta-job-athon.vercel.app"

function TwitchStream() {
  return (
    <div className="iframe-container">
      <iframe
        src={iframeUrl}
        allowFullScreen={true}
        loading='eager'
      >

      </iframe>
    </div>
  )
}

export default TwitchStream
