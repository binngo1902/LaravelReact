<?php
/**
 * ApiResponse
 *
 * @package App\Traits
 * @author Vo Son <son.vo@cadabra.jp>
 * @since 1.9.3
 * @lastUpdate 2021-06-07, at 09:00 AM
 */

namespace App\Traits;

use Carbon\Carbon;
use Illuminate\Http\Response;
use Illuminate\Http\Resources\Json\JsonResource;

/*
|--------------------------------------------------------------------------
| Api Responser Trait
|--------------------------------------------------------------------------
|
| This trait will be used for any response we sent to clients.
|
*/

trait ApiResponse
{
    /**
     * Return a success JSON response.
     *
     * If you want the payload to be decoded as an associative array use this:
     * $data->response()->getData(true)
     * Or return object you can use this:
     * $data->response()->getData()
     * And if you want the raw decoded JSON payload use this instead:
     * $data->response()->getContent()
     *
     * @author Vo Son <son.vo@cadabra.jp>
     * @param  JsonResource  $data
     * @param  string  $message
     * @param  int|null  $code
     * @lastUpdate 2021-06-07, at 09:00 AM
     * @return \Illuminate\Http\JsonResponse
     */
    protected function successResponse(JsonResource $data = null, string $message = null, int $code = Response::HTTP_OK, array $headerOptions = [])
    {
        $res = [];

        if ($data) {
            $res = $data->response()->getData(true);
        }

        $data = [
            'status'       => true,
            'message'      => $message,
            'responseTime' => Carbon::now()->toIso8601String(),
            'data'         => $res['data'] ?? [],
        ];

        if (isset($res['meta'])) {
            $data['meta'] = $res['meta'];
        }

        if (isset($res['links'])) {
            $data['links'] = $res['links'];
        }

        return response()->json($data, $code);
    }

    /**
     * Return an error JSON response.
     *
     * @author Vo Son <son.vo@cadabra.jp>
     * @param  string  $description
     * @param  int  $code
     * @param  array|string|null  $errors
     * @return \Illuminate\Http\JsonResponse
     */
    protected function errorResponse(string $message = null, int $code = Response::HTTP_OK, $errors = null)
    {
        return response()->json([
            'status'       => false,
            'message'      => $message,
            'responseTime' => Carbon::now()->toIso8601String(),
            'errors'       => $errors
        ], $code);
    }
}
