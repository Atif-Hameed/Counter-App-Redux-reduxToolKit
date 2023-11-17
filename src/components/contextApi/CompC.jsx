import React from 'react'
import { firstName, lastName } from '../../App'

const CompC = () => {
  return (
    <>
      <lastName.Consumer>
        {
          (lname) => {
            return (
              <firstName.Consumer>
                {
                  (fname) => {
                    return <h1>Hello This is {fname} {lname}</h1>
                  }
                }
              </firstName.Consumer>
            )
          }
        }
      </lastName.Consumer>
    </>
  )
}

export default CompC
