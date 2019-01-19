<?php

namespace app\api\controller;

use think\Controller;

class Class extends Controller{
  
  public function read(){
    $date = input('date');
    $time = input('time');
    $addr = input('addr');
    $model = model('Class');
    $data = $model -> getRoomListFromTime($date,$time,$addr);
    if($data){
      $code = 200;
    } else {
      $code = 404;
    }
    return json($data);
  }
  
  public function write(){
    $user = input('user');
    $id = input('id');
    $date = input('date');
    $time = input('time');
    $addr = input('addr');
    $usernumber = input('userId');
    $userphone = input('phone');
    $data = ['user' => $user, 'id' => $id, 'date' => $date, 'time' => $time, 'addr' => $addr, 'usernumber' => $usernumber, 'userphone' => $userphone];
    $model = model('Class');
    $data = $model -> insertInfo($data);
    if($data){
      $code = 200;
    } else {
      $code = 404;
    }
    return $data;
  }
  
  public function getInfo(){
    $usernumber = input('userId');
    $model = model('Class');
    $data = $model -> getOrderFromUser($usernumber);
    if($data){
      $code = 200;
    } else {
      $code = 404;
    }
    return json($data);
  }
}