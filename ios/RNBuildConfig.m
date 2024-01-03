//
//  RNBuildConfig.m
//  ApolloClientTemplate
//
//  Created by Cong Duy on 03/01/2024.
//

#import "RNBuildConfig.h"
@implementation RNBuildConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if DEVELOP
  NSString *env=@"dev";
#elif STAGING
  NSString *env=@"stag";
#else
  NSString *env=@"prod";
#endif
  return @{@"buildEnv": env};
}
+ (BOOL)requireMainQueueSetup
{
  return YES;
}
@end
