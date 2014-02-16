//
//  DataViewController.h
//  Color Cloud
//
//  Created by David Sjunnesson on 2/16/14.
//  Copyright (c) 2014 IDEO. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DataViewController : UIViewController

@property (strong, nonatomic) IBOutlet UILabel *dataLabel;
@property (strong, nonatomic) id dataObject;

@end
