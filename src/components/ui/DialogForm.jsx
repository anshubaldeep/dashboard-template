import AlertDialog from "./AlertDialog";
import Form from "./Form";
import Loading from "./Loading";

const DialogForm = ({
  title,
  description,
  controlled = true,
  open,
  onOpenChange = () => {},
  onConfirm = () => {},
  onClose = () => {},
  dialogProps,
  rhfProps,
  formConfig,
  formProps,
  loading = false,
}) => {
  const { handleSubmit } = rhfProps;

  return (
    <AlertDialog
      title={title}
      description={description}
      controlled={controlled}
      open={open}
      onOpenChange={onOpenChange}
      onConfirm={handleSubmit(onConfirm)}
      onClose={onClose}
      {...dialogProps}
    >
      {loading ? (
        <div className="h-[400px] flex items-center justify-center">
          <Loading disableBackdropClick />
        </div>
      ) : (
        <Form rhfProps={rhfProps} formConfig={formConfig} {...formProps} />
      )}
    </AlertDialog>
  );
};

export default DialogForm;
