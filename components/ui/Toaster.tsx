"use client"

import { useToast } from "../../hooks/useToast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast";

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}
          className="bg-gradient-to-r from-[#A55166] to-green-50 dark:bg-gradient-to-r dark:from-green-900 dark:to-green-500 [.destructive]:bg-gradient-to-r [.destructive]:from-red-200 [.destructive]:to-red-50 [.destructive]:dark:bg-gradient-to-r [.destructive]:dark:from-red-900 [.destructive]:dark:to-red-500 border-none"
          >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}