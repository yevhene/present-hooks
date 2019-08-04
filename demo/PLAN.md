# Hooks

## Intro. Presentation

#### Demo: Counter (Refactoring)

## Built in hooks

### useReducer

Useful to incapsulate complex logic

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    default:
      throw new Error()
  }
}
```

```javascript
function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <button onClick={() => dispatch({ type: 'increment' })}>
      {state.count}
    </button>
  )
}
```

#### Demo: Todo

### useCallback

To avoid unnecessary re-render

```javascript
const handleClick = useCallback(
  () => doSomething(a, b),
  [a, b]
)
```

### useMemo

To avoid same complex computations

```javascript
const calculateYourMomsWeight = useMemo(
  () => compute(a, b),
  [a, b]
)
```

### useRef
A replacement for `React.createRef` and for instance variables

```javascript
const hateThisJqueryPluginRef = useRef(null)

hateThisJqueryPluginRef.current
```

### useImperativeHandle
To create custom ref methods. Should be used with `React.forwardRef`

```javascript
function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }));
  return <input ref={inputRef} ... />
}
FancyInput = forwardRef(FancyInput)
```

### useLayoutEffect
Same us useEffect but runs synchronously after all DOM mutations. (Before layout and paint as componentDidMount and componentDidUpdate).

### Demo: Scroll

### useDebugValue

```javascript
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(false)

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline')

  return isOnline
}
```

### useListener
For a brand new **Flare** event system

## Hooks rules

#### Demo: Rules

## Inside
[ReactFiberHooks](https://github.com/facebook/react/blob/v16.8.6/packages/react-reconciler/src/ReactFiberHooks.js)
- [Effects: 24](https://github.com/facebook/react/blob/v16.8.6/packages/react-reconciler/src/ReactFiberHooks.js#L24)
- [Dispatcher type: 47](https://github.com/facebook/react/blob/v16.8.6/packages/react-reconciler/src/ReactFiberHooks.js#L47)
- [Dispatchers: 1173](https://github.com/facebook/react/blob/v16.8.6/packages/react-reconciler/src/ReactFiberHooks.js#L1173)

#### Demo: Spy

## [useHooks](https://usehooks.com/)

#### Demo: Speakers
