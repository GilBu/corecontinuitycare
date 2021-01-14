import React from 'react'
import './styles.css'

class BioItem extends React.Component {
  state = {
    opened: false
  }

  render () {
    const {
      props: {
        bio,
        title,
        name,
        image
      },
      state: {
        opened
      }
    } = this

    return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <img className='bio-image' src={image} alt={name}/>
            <h3 {...{ className: 'accordion-item__title' }}>
              {name}: {title}
            </h3>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p {...{ className: 'accordion-item__paragraph' }}>
                  {bio}
                </p>
              </div>
            </div>
        </div>
      )
  }
}

export default BioItem;