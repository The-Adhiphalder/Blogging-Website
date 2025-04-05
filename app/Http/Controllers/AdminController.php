<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
use App\Models\Post;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class AdminController extends Controller
{


    public function adminlogin(){
        return view('Admin.AdminLogin');
    }

    public function adminAuth(Request $request)
    {
        $request->validate([
            'admin_id' => 'required',
            'password' => 'required',
        ]);

        $admin = Admin::where('admin_id', $request->admin_id)->first();

        if ($admin && Hash::check($request->password, $admin->password)) {
            $request->session()->put('admin', $admin);
            $request->session()->put('admin_id', $admin->admin_id);

            return redirect()->route('dashboard')->with('success', 'Logged in successfully!');
        }

        return back()->withErrors(['admin_id' => 'Invalid credentials']);
    }


    public function adminhome(){
        // return view('Admin.AdminHome');

        if (!session()->has('admin')) {
            return redirect()->route('admin.login')->with('error', 'Please log in first.');
        }
    
        $totalUsersLast24Hours = User::where('created_at', '>=', now()->subDay())->count();
        $totalPostsLast24Hours = Post::where('created_at', '>=', now()->subDay())->count();

        $users = User::orderBy('created_at', 'desc')->get();
    
        return view('Admin.AdminHome', compact('totalUsersLast24Hours', 'totalPostsLast24Hours', 'users'));
    }

    public function suspendUser (Request $request, $userId)
    {
        $request->validate([
            'suspend_account' => 'required|integer|in:0,1',
        ]);

        $user = User::find($userId);

        if ($user) {
            $user->suspend_account = $request->suspend_account;
            $user->save();

            $message = $request->suspend_account ? 'User  account suspended.' : 'User  account activated.';
            return response()->json(['success' => true, 'message' => $message]);
        }

        return response()->json(['success' => false, 'error' => 'User  not found.']);
    }

    public function deleteUser ($userId)
    {
        $user = User::find($userId);

        if ($user) {
            $user->delete();
            return redirect()->back()->with('success', 'User  deleted successfully.');
        }

        return redirect()->back()->withErrors(['user' => 'User  not found.']);
    }

    public function adminuser()
    {
        // return view('Admin.AdminUser');

        if (!session()->has('admin')) {
            return redirect()->route('admin.login')->with('error', 'Please log in first.');
        }
    
        // Fetch all users from the database
        $users = User::all(); // You can also use pagination if needed
    
        return view('Admin.AdminUser ', compact('users'));
    }

    public function adminpost()
    {
        return view('Admin.AdminPost');
    }

    public function admincommunity()
    {
        return view('Admin.AdminCommunity');
    }

    public function viewcommunity()
    {
        return view('Admin.ViewCommunities');
    }

    public function admincontent()
    {
        return view('Admin.AdminContent');
    }    

    public function viewpost()
    {
        return view('Admin.ViewPost');
    }
    

}
