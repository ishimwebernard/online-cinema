import React from 'react'
import { Carousel } from "react-bootstrap";

export default function Car() {
    return (
        <div className=" ">
            <Carousel>
  <Carousel.Item>
    <img
      className="h-2/4 w-100"
      src="https://canvas-bridge.tubitv.com/yieRfNe99utiLjghJiF6YA_9Zu4=/0x120:2000x2974/400x574/smart/img.adrise.tv/8d4b4505-2e9e-49fa-9281-0269bf4f3af5.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="h-2/4 w-100"
      src="https://canvas-bridge.tubitv.com/IcWirqwWQQkNupvXYX26zMYiXDI=/400x574/smart/img.adrise.tv/cf67fa7f-d8b4-409a-af17-df476f8964ff.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
