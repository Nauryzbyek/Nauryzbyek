import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'
import 'videojs-youtube'
import style from '../styles/Main.module.css'

interface PlayerProps {
  techOrder: string[]
  autoplay: boolean
  controls: boolean
  sources: { src: string; type: string }[]
}

export default function Player(props: PlayerProps) {
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null)
  const onVideo = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el)
  }, [])

  useEffect(() => {
    if (videoEl == null) return
    const player = videojs(videoEl, props)
    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (
    <>
      <h1 className={style.txt}>LALALALALALLA</h1>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  )
}
