import React, { useEffect, useRef, useState } from "react";
import { Slider } from "./Slider";
import { Image } from "./Image";
import { CarouselContainer } from "./style";

export const Carousel = (props: any) => {
  const { images } = props;
  const width = props.width;

  const firstSlide = images[0];
  const secondSlide = images[1];
  const lastSlide = images[images.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    transform: width,
    transition: 0.45,
    _images: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, transform, _images, transition } = state;

  const autoPlayRef: any = useRef();
  const transitionRef: any = useRef();
  const resizeRef: any = useRef();
  const sliderRef: any = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const slider: any = sliderRef.current;

    const play = () => {
      autoPlayRef.current();
    };

    const smooth = () => {
      transitionRef.current();
    };

    const resize = () => {
      resizeRef.current();
    };

    slider.addEventListener("transitionend", smooth);
    window.addEventListener("resize", resize);

    let interval: any = null;

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }

    return () => {
      slider.removeEventListener("transitionend", smooth);
      window.removeEventListener("resize", resize);

      if (props.autoPlay) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, transform: width, transition: 0 });
  };

  const smoothTransition = () => {
    let _images = [];

    if (activeSlide === images.length - 1)
      _images = [images[images.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) _images = [lastSlide, firstSlide, secondSlide];
    else _images = images.slice(activeSlide - 1, activeSlide + 2);

    setState({
      ...state,
      _images,
      transition: 0,
      transform: width,
    });
  };

  const nextSlide = () =>
    setState({
      ...state,
      transform: transform + width,
      activeSlide: activeSlide === images.length - 1 ? 0 : activeSlide + 1,
    });

  const prevSlide = () =>
    setState({
      ...state,
      transform: 0,
      activeSlide: activeSlide === 0 ? images.length - 1 : activeSlide - 1,
    });
  return (
    <CarouselContainer ref={sliderRef}>
      <Slider
        transform={transform}
        transition={transition}
        width={width * _images.length}
      >
        {_images.map((_image, i) => (
          <Image width={width} key={_image + i} content={_image} />
        ))}
      </Slider>
    </CarouselContainer>
  );
};
