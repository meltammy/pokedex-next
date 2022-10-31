import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  grid-area: search;
  margin-right: auto;
  > input {
    border-radius: 1rem;
    padding: 0.2rem 1rem 0.2rem 2.5rem;
    height: 2.25rem;
    background: url(search_icon.svg) no-repeat scroll 0.8rem;
    border-color: gray;
    border-style: solid;
  }
`
