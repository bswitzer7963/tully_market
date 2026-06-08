import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import '../../indieCSS/embla.css';

import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  useEffect(() => {
    if (!emblaApi) return

    const updateSelected = () => {
        emblaApi.slideNodes().forEach((slide, i) => {
        if (i === emblaApi.selectedScrollSnap()) {
            slide.classList.add('is-selected')
        } else {
            slide.classList.remove('is-selected')
        }
        })
    }

    emblaApi.on('select', updateSelected)
    emblaApi.on('reInit', updateSelected)
    updateSelected()
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
        {slides.map((slide) => (
        <div className="embla__slide" key={slide.id}>
            <div className="embla__parallax">
                <div className="embla__parallax__layer">
                    {slide.image ? (
                    <>
                        <img
                            className="embla__slide__img embla__parallax__img"
                            src={slide.image}
                            alt={slide.title}
                        />
                        <div className="slide__info">
                            <h3>
                                {slide.title}
                            </h3>
                            <p>
                                {slide.description}
                            </p>
                        </div>
                    </>
                    ) : (
                    <div className="embla__slide__number">
                        <span>
                            {slide.id}
                        </span>
                    </div>
                    )}
                </div>
            </div>
        </div>
        ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
