package com.nativemixing;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.horcrux.svg.RNSvgPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.jordansexton.react.crosswalk.webview.CrosswalkWebViewPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
          ,new RNDeviceInfo()
          ,new RNSvgPackage()
          //,new CodePush(this.getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), this, BuildConfig.DEBUG)
          ,new CrosswalkWebViewPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
