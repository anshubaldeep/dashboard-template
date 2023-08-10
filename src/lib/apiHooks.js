import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from "./axios";
import { postProp, prop } from "./apiProps";

export const useGetQuery = (
  key,
  url,
  queryOptions = {},
  {
    onErrorContinued = () => {},
    axiosOptions = {},
    errorString = "Error Fetching Data",
    toastErrorOptions = {},
  } = {}
) => {
  const rhf = useQuery(
    key,
    async () => {
      const res = await axios.get(url, {
        headers: prop.headers,
        ...axiosOptions,
      });
      return res.data;
    },
    {
      onError: (error) => {
        toast.error(
          error?.response?.data?.data?.error_details ||
            error?.message ||
            errorString ||
            "Error Fetching Data",
          toastErrorOptions
        );
        onErrorContinued(error);
      },
      ...queryOptions,
    }
  );
  return rhf;
};

export const usePostQuery = (
  key,
  url,
  queryOptions,
  {
    onErrorContinued = () => {},
    onSuccessContinued = () => {},
    axiosOptions = {},
    errorString = "Error posting data",
    successString = "Successfully posted data",
    toastErrorOptions = {},
    customUrl = null,
  } = {}
) => {
  const rhf = useMutation(
    key,
    async (values) => {
      const res = await axios.post(
        customUrl ? customUrl(values) : url,
        values,
        {
          headers: postProp.headers,
          ...axiosOptions,
        }
      );
      return res.data;
    },
    {
      onError: (error) => {
        toast.error(
          error?.response?.data?.data?.error_details ||
            error?.message ||
            errorString,
          toastErrorOptions
        );
        onErrorContinued();
      },
      onSuccess: (data) => {
        toast.success(data?.message || data?.data?.message || successString);
        onSuccessContinued(data);
        return data;
      },
      ...queryOptions,
    }
  );
  return rhf;
};

export const usePutQuery = (
  key,
  url,
  queryOptions,
  {
    onErrorContinued = () => {},
    onSuccessContinued = () => {},
    axiosOptions = {},
    errorString = "Error updating data",
    successString = "Successfully updated data",
    toastErrorOptions = {},
    customUrl = null,
    customPayload = null,
  } = {}
) => {
  const rhf = useMutation(
    key,
    async (values) => {
      const res = await axios.put(
        customUrl ? customUrl(values) : url,
        customPayload ? customPayload(values) : values,
        {
          headers: postProp.headers,
          ...axiosOptions,
        }
      );
      return res.data;
    },
    {
      onError: (error) => {
        toast.error(
          error?.response?.data?.data?.error_details ||
            error?.message ||
            errorString,
          toastErrorOptions
        );
        onErrorContinued();
      },
      onSuccess: (data, values) => {
        toast.success(data?.message || successString);
        onSuccessContinued(data, values);
        return data;
      },
      ...queryOptions,
    }
  );
  return rhf;
};

export const useDeleteQuery = (
  key,
  url,
  queryOptions,
  {
    onErrorContinued = () => {},
    onSuccessContinued = () => {},
    axiosOptions = {},
    errorString = "Error deleting data",
    successString = "Successfully deleted data",
    toastErrorOptions = {},
    customUrl = null,
  } = {}
) => {
  const rhf = useMutation(
    key,
    async (values) => {
      const res = await axios.delete(customUrl ? customUrl(values) : url, {
        headers: postProp.headers,
        ...axiosOptions,
      });
      return res.data;
    },
    {
      onError: (error) => {
        toast.error(
          error?.response?.data?.data?.error_details ||
            error?.message ||
            errorString,
          toastErrorOptions
        );
        onErrorContinued();
      },
      onSuccess: (data) => {
        toast.success(data?.message || successString);
        onSuccessContinued(data);
        return data;
      },
      ...queryOptions,
    }
  );
  return rhf;
};

export const useInfiniteGetQuery = (
  key,
  url,
  queryOptions = {},
  {
    onErrorContinued = () => {},
    axiosOptions = {},
    errorString = "Error Fetching Data",
    toastErrorOptions = {},
    customUrl = null,
  } = {}
) => {
  const rhf = useInfiniteQuery(
    key,
    async ({ pageParam = 1 }) => {
      const res = await axios.get(
        customUrl ? customUrl(pageParam) : url + `?page=${pageParam}`,
        {
          headers: prop.headers,
          ...axiosOptions,
        }
      );
      return res.data;
    },
    {
      onError: (error) => {
        toast.error(
          error?.response?.data?.data?.error_details ||
            error?.message ||
            errorString ||
            "Error Fetching Data",
          toastErrorOptions
        );
        onErrorContinued(error);
      },
      ...queryOptions,
    }
  );
  return rhf;
};
