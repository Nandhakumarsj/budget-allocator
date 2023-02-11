# budget-allocator
State balance across siblings and parent through each child is implemented successfully for some company's budget allocation chart.
> It replaces the use cases of ` useContext ` with ` useState ` and ` useEffect ` hooks.
Shortly saying this application maintaines its own states with different **hierarchy** levels of the main component.

<hr/>

 Alternatively we can use Redux store keep the whole Context in a single application. 

## Note
* Though the use of context is encouraged this experimented to replace that hook .
* ` useReducer ` works best for ` useContext ` hook in this case
