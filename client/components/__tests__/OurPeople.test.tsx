//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderApp } from '../../test-setup'

describe('Han Not So Solo Test', () => {
  it('shows our team member image', () => {
    // ARRANGE
    const screen = renderApp('/empire/ourPeople')

    const img = screen.getByAltText('Darth Sidious')
    expect(img).toHaveAttribute(
      'src',
      'https://static.independent.co.uk/2022/05/02/15/newFile.jpg?width=1200'
    )
  })

  it('Show a FrontLine Hero', () => {
    // ARRANGE
    const screen = renderApp('/empire/ourPeople')

    const img = screen.getByAltText('Storm Trooper #2342')
    expect(img).toHaveAttribute(
      'src',
      'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/b/b9/Stormtrooper.jpg'
    )
  })

  it('Show the signup form page', () => {
    // ARRANGE
    const screen = renderApp('/empire/signUp')

    expect(screen.getByText(/Welcome to a brighter future/)).toBeVisible()
  })

  it('Test the signup form field', () => {
    // ARRANGE
    const screen = renderApp('/empire/signUp')

    expect(screen.getByLabelText(/Date of Birth/)).toBeVisible()
  })

  // it('shows me a bird', async () => {
  //   const { user, ...screen } = renderApp('/birdFamily/Pigeons')

  //   const link = screen.getByText('Rails and swamphens')
  //   await user.click(link)
  //   // Selector tier list
  //   //
  //   // S: getByRole
  //   // A: getByLabelText, getByAltText
  //   // B: getByText
  //   // D: getByTestId
  //   const li = screen.getByText('pūkeko')

  //   expect(li).toBeVisible()
  // })
})

// describe('Info page description', () => {
//   it('shows me some info', () => {
//     const screen = renderApp('/info')

//     const para = screen.getByText(/As well as many unique seabirds, /)
//     expect(para).toBeVisible()
//   })
// })
