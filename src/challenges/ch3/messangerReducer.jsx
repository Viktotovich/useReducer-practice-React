export const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello",
    1: "",
    2: "",
  },
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case "submit_input": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
