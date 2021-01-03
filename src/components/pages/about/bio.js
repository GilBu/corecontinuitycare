import React from 'react'
import './styles.css'
import {imagesList} from './images.js'

class Bio extends React.Component {
  state = {
    opened: false
  }

  produceBioWidgets = () => {
    return bioList.map(bioInfo => {
      return (
        <div className="responsive">
          <div className="bios">
            <p>{bioInfo.bio}</p>
          </div>
        </div>
      )
    });
  }

  render () {
    const {
      props: {
        bio,
        title
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
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
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

export default Bio;