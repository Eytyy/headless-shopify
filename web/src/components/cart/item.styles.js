import styled from "@emotion/styled"

export const Item = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 24px;
  margin-bottom: 24px;
`

export const ItemContent = styled.div``

export const ItemContentTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-gap: 24px;
  font-size: 24px;
  align-items: center;
  margin-bottom: 24px;
`

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border: 4px solid #fff;
  margin: 0;
  display: block;
`

export const PriceQunatityWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 24px;
  margin-bottom: 24px;
  align-items: center;
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const QuantityValue = styled.span`
  margin: 0 8px;
`

export const ItemPrice = styled.div`
  text-align: right;
  .original-price {
    text-decoration: line-through;
    opacity: 0.5;
  }
  .sep {
    margin: 0 4px;
  }
`

export const DeleteItemWrapper = styled.div`
  text-align: right;
`
