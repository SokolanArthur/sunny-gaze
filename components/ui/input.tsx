import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "placeholder-primaryGray border-2 border-primaryGrayLighter flex h-[55px] w-[430px] bg-secondaryGray rounded-full pl-14 py-2 text-2xl font-normal ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          className   
        )}
        ref={ref}  
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
