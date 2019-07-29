# Hooks


#### Do Hooks cover all use cases for classes?

Our goal is for Hooks to cover all use cases for classes as soon as possible. There are no Hook equivalents to the uncommon getSnapshotBeforeUpdate and componentDidCatch lifecycles yet, but we plan to add them soon.

## List

### Basic

#### useState
Instead of `setState`
```
const [state, setState] = useState(initialState);
```

#### useEffect
Instead of `componentDidMount`
```
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

#### useContext
instead of `Context.Consumer`
```
const value = useContext(MyContext);
```

### Additional

#### useReducer
To encapsulate complex logic
```
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

#### useCallback
Instead of binded methods
```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

#### useMemo
To avoid same complex computations. Van be used instead of shouldComponentUpdate
```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

#### useRef
Instead of `React.createRef`
```
const refContainer = useRef(initialValue);
```

#### useImperativeHandle
TODO

#### useLayoutEffect
Synchronous alternative to `useEffect`.

#### useDebugValue
Value for custom hook
```
function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}
```

##
- React.memo
- How hooks works inside
- Hooks with suspence experiment render - componentDidMount
- useHooks https://usehooks.com/

## Demo
- Custom hooks
- Reducer hook
