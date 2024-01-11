const iframeUrl = "https://player.twitch.tv/?channel=10jv01&parent=geta-job-athon.vercel.app"

function TwitchStream() {
  return (
    <div>
      <iframe
        src={iframeUrl}
        height="378"
        width="620"
        allow="picture-in-picture full"
        loading='eager'
      >

      </iframe>
    </div>
  )
}

export default TwitchStream
