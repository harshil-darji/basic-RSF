const loadingReducer = (state = false, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);

    if (!matches) return state;

    const [,, requestState] = matches;
    return (requestState === "REQUEST")? true: false;
};

export default loadingReducer;
