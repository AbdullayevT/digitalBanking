import { configureStore } from "@reduxjs/toolkit";
import home from "@/features/home";
import main from "@/features/main";
export const store = configureStore({
  reducer: {
    home,
    main,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch<any>;
