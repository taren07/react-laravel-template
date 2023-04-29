<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use \Symfony\Component\HttpFoundation\Response;

abstract class AuthController extends Controller
{
    // Guardの認証方法を指定
    protected function guard()
    {
        return Auth::guard('web');
    }

    // 追加認証情報
    public function credentials(array $credentials): array
    {
        $credentials['is_admin'] = false;
        return $credentials;
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = $this->credentials($credentials);

        // ● cookie
        if ($this->guard()->attempt($credentials)) {
            $request->session()->regenerate();
            $user = $this->guard()->user();
            // 追加認証チェック
            if (!$this->additionalLoginStatusCheck($user)) {
                // 失敗したらログインしたけどログアウトする
                $this->processLogout($request);
                abort(451);
            }
            return $this->me($request);
        }

        abort(451);
    }

    // ユーザ詳細情報を返す抽象メソッド
    abstract function me(Request $request);

    // ログインステータスチェック
    public function loginStatusCheck(Request $request)
    {
        try {
            $user = $this->guard()->user();
            if (!$user || !$this->additionalLoginStatusCheck($user)) {
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

    // ユーザ詳細情報を返す抽象メソッド
    abstract function additionalLoginStatusCheck(User $user);

    // ログアウト関数
    public function logout(Request $request)
    {
        $this->processLogout($request);
    }

    // ログアウト処理
    private function processLogout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

    }

}
