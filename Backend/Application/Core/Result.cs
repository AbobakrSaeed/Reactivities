using System;

namespace Application.Core;

public class Result<T>
{
    public bool IsSuccess { get; set; }
    public T? Value { get; set; }
    public string Error { get; set; }
    public int StatusCode { get; set; }

    public static Result<T> Success(T value)
    {
        return new Result<T>
        {
            IsSuccess = true,
            Value = value
        };
    }

    public static Result<T> Failure(string error, int statusCode)
    {
        return new Result<T>
        {
            IsSuccess = false,
            Error = error,
            StatusCode = statusCode
        };
    }
}
