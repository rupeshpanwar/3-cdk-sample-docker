import { 
  Stack,
  StackProps,
  aws_ec2 as ec2,
  aws_ecs as ecs,
  aws_ecs_patterns as ecs_patterns,
} from 'aws-cdk-lib';

import { Construct } from 'constructs';

export class CdkWatchStack extends Stack {
   constructor(scope: Construct, id: string, props?: StackProps) {
   super(scope, id, props);

const vpc = new ec2.Vpc(this, 'Vpc', {
   maxAzs: 2,
   natGateways: 1,
});

new ecs_patterns.ApplicationLoadBalancedFargateService(this, 'EcsService', {
   vpc,
   taskImageOptions: {
   image: ecs.ContainerImage.fromAsset('docker-app'),
   containerPort: 80,
   },
 });
}
}
