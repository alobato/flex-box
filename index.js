
import styled from 'styled-components'
import { style, space, layout, typography, color, position, flexbox } from 'styled-system'

export const Box = styled.div(
  {boxSizing: 'border-box'},
  space,
  layout,
  typography,
  color,
  position,
  style({prop: 't', cssProperty: 'top', transformValue: n => /^\d+$/.test(n) ? n + 'px': n}),
  style({prop: 'r', cssProperty: 'right', transformValue: n => /^\d+$/.test(n) ? n + 'px': n}),
  style({prop: 'b', cssProperty: 'bottom', transformValue: n => /^\d+$/.test(n) ? n + 'px': n}),
  style({prop: 'l', cssProperty: 'left', transformValue: n => /^\d+$/.test(n) ? n + 'px': n}),
  style({prop: 'w', cssProperty: 'width', transformValue: n => /^\d+$/.test(n) ? n + 'px': n}),
  style({prop: 'h', cssProperty: 'height', transformValue: n => /^\d+$/.test(n) ? n + 'px': n}),
  style({prop: 'ta', cssProperty: 'textAlign'}),
  style({prop: 'cursor', cssProperty: 'cursor'}),
  props => props.css
)

export const Flex = styled(Box)(
  {display: 'flex'},
  flexbox,
  style({prop: 'jc', cssProperty: 'justifyContent'}),
  style({prop: 'ai', cssProperty: 'alignItems'})
)
