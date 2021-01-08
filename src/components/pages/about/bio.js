import React from 'react'
import BioItem from './bioItem.js'
import {imagesList} from './images.js'

class Bio extends React.Component {
  state = {
    opened: false
  }
  render () {
    const {
      state: {
        opened
      }
    } = this
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {imagesList.map((imagesList, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <BioItem {...imagesList} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Bio;