import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { DialogFooter } from "./Dialog";
import { Close } from "@radix-ui/react-dialog";

const AlertDialog = ({
  showCloseIcon = true,
  disableBackdropClick = false,
  title,
  description,
  children,
  controlled = false,
  open = false,
  onOpenChange = () => {},
  showConfirm = true,
  confirmLabel = "Confirm",
  onConfirm = () => {},
  showClose = true,
  closeLabel = "Close",
  onClose = () => {},
  Trigger = null,
  customDialogActions = null,
  classNames = {},
  ...props
}) => {
  return (
    <Dialog {...(controlled ? { open, onOpenChange } : {})}>
      {!controlled && <DialogTrigger>{Trigger || `Open`}</DialogTrigger>}
      <DialogContent
        showClose={showCloseIcon}
        onPointerDownOutside={(e) => {
          disableBackdropClick && e.preventDefault();
          props.onPointerDownOutside && props.onPointerDownOutside(e);
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className={classNames.description}>
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          {showConfirm && (
            <Button onClick={() => onConfirm()}>{confirmLabel}</Button>
          )}
          {showClose &&
            (controlled ? (
              <Button
                variant="destructive"
                onClick={() => {
                  onClose();
                }}
              >
                {closeLabel}
              </Button>
            ) : (
              <Close asChild>
                <Button variant="destructive" onClick={() => onClose()}>
                  {closeLabel}
                </Button>
              </Close>
            ))}
          {customDialogActions}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlertDialog;
