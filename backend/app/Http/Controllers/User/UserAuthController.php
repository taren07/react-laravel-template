<?php

namespace App\Http\Controllers\User;

use App\Http\Resources\Admin\TakerOverUserDetail;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\User\UserMe;
use \Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\AuthController;

class UserAuthController extends AuthController
{
    // 追加認証情報
    public function credentials(array $credentials): array
    {
        $credentials = parent::credentials($credentials);
        // 管理者フラグをオフでチェックする
        $credentials['is_admin'] = false;
        return $credentials;
    }

    // ログインステータスチェック追加項目 TBD
    public function additionalLoginStatusCheck(User $user)
    {
        // 管理者の場合追加チェックなし
        if ($user->is_admin) {
            return true;
        }

        // ログイン制御フラグチェック
        if ($user->account_status === User::ACCOUNT_STATUS_INVALID) {
            return false;
        }

        // 所属会社の有効無効制御
        if (!$user->company->is_valid) {
            return false;
        }
        return true;
    }

    // ログインステータスチェック
    public function loginStatusCheck(Request $request)
    {
        try {
            $originUser = $this->guard()->user();
            $user = $this->guard()->takeOverUser();
            if (!$user || !$this->additionalLoginStatusCheck($originUser)) {
                // ユーザ認証なし
                // 追加認証に失敗
                return 0;
            } else {
                // 認証OK
                return $user->id;
            }
        } catch (\Exception $e) {
            abort(406);
        }
    }

    // ユーザ詳細情報
    public function me(Request $request)
    {

        $user = $this->guard()->user();
        if ($user->is_admin && $user->take_over_user_id > 0) {
            return new TakerOverUserDetail($user);
        }
        return new UserMe($user);
    }
}
