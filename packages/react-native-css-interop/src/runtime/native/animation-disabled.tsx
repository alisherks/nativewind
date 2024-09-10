import { createContext, useContext } from "react";

const AnimationDisabledContext = createContext(false);

export const AnimationDisabled = (props: React.PropsWithChildren) => {
    return <AnimationDisabledContext.Provider {...props} value={true} />;
};

export const useIsAnimationDisabled = () => useContext(AnimationDisabledContext);
