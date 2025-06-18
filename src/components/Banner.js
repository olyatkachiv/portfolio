"use client"

import { useState, useEffect, useCallback } from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/me.png"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const toRotate = ["Web Developer", "Front-End Developer", "Project Manager"]
  const period = 2000

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }, [loopNum, isDeleting, text, toRotate])

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [delta, tick])

  const scrollToConnect = () => {
    const connectSection = document.getElementById("connect")
    if (connectSection) {
      connectSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <section className="banner" id="home">
      <div className="banner-background">
        <div className="banner-shape shape1"></div>
        <div className="banner-shape shape2"></div>
        <div className="banner-shape shape3"></div>
        <div className="banner-shape shape4"></div>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Crafting Interfaces with Vision</span>
              <div className="hero-text-container">
                <h1>
                  {`Hi, I'm Olha`}{" "}
                  <span className="txt-rotate">
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
              </div>
              <p>
                Passionate about design, I build beautiful, responsive web interfaces with purpose. I blend clean code
                with clear communication, always putting the user first. With experience in leading small teams and
                project coordination, I bring structure and creativity to every build.
              </p>
              <button onClick={scrollToConnect} type="button">
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <div className="profile-image-container">
                <img src={headerImg || "/placeholder.svg"} alt="Olha Tkachiv" className="profile-image" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="banner-divider" onClick={scrollToConnect}>
        <div className="divider-icon"></div>
        <div className="divider-icon"></div>
        <div className="divider-icon"></div>
      </div>
    </section>
  )
}
